import { pool } from "@/lib/db";
import { DBClassifierIndex, DBClassifierItem } from "@/lib/types/classifiers";
import { RowDataPacket } from "mysql2";

export async function GetClassifiersByStateId({
  stateID,
  limit,
  offset,
}: {
  stateID: number;
  limit: number;
  offset: number;
}): Promise<DBClassifierItem[]> {
  const [rows] = await pool.query<RowDataPacket[]>(
    `
  SELECT
    DATE_FORMAT(n.datacad , '%d/%m/%Y') AS datacad,
    DATE(n.datacad) AS data_iso,
    COUNT(*) AS total
  FROM classificador n
  WHERE n.idestado = ?
    AND n.exc = 'N'
    AND n.datacad  IS NOT NULL
  GROUP BY DATE(n.datacad)
  ORDER BY n.datacad ASC
  LIMIT ? OFFSET ?;
    `,
    [stateID, limit, offset],
  );

  return rows as DBClassifierItem[];
}

export async function GetClassifiersByStateIdAndDate({
  stateID,
  date,
  limit,
  offset,
}: {
  stateID: number;
  date: string;
  limit: number;
  offset: number;
}): Promise<DBClassifierIndex[]> {
  const [rows] = await pool.query<RowDataPacket[]>(
    `
SELECT
  bp.titulo AS nome_barra,
  oa.titulo AS nome_orgao,
  dp.nome AS nome_departamento,
  a.idato,
  a.titulo AS titulo_ato,
  a.texto AS texto_ato,
  a.datacad,
  a.dt_aprovacao,
  a.introducao,
  a.secao,
  a.especie,
  a.numero,
  a.vara,
  a.data_registro,
  a.comarca,
  a.opcoes,
  a.jurisprudencia,
  a.ancora
FROM barra_pre_definida bp
LEFT JOIN barra_orgao_ato boa ON boa.idpre = bp.idpre
LEFT JOIN orgao_ato oa ON oa.idorgao = boa.idorgao
LEFT JOIN departamento_orgao_ato doa ON doa.idorgao = oa.idorgao
LEFT JOIN departamento_pre_definido dp ON dp.idpre = doa.idpre
LEFT JOIN ato a ON a.iddepartamento = dp.idpre AND a.exc = 'N'
WHERE bp.exc = 'N'
AND bp.idestado = ?
AND (oa.exc = 'N' OR oa.exc IS NULL)
AND (oa.idestado = ? OR oa.idestado IS NULL)
AND (dp.exc = 'N' OR dp.exc IS NULL)
AND (dp.idestado = ? OR dp.idestado IS NULL)
AND a.data_registro >= ?
AND a.data_registro < DATE_ADD(?, INTERVAL 1 DAY)
ORDER BY bp.titulo,oa.titulo,dp.nome,a.data_registro
LIMIT ? OFFSET ?
`,
    [stateID, stateID, stateID, date, date, limit, offset],
  );
  return rows as DBClassifierIndex[];
}
