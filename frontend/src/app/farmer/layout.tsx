import FarmerLayout from "./FarmerLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FarmerLayout>{children}</FarmerLayout>;
}