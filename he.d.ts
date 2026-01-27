declare module "he" {
  export function decode(input: string): string;
  export function encode(
    input: string,
    options?: { useNamedReferences?: boolean },
  ): string;
}
