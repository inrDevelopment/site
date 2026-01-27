type PageTitleProps = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
      {children}
    </h1>
  );
}
