import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Ukraine Solutions',
  description: 'View our current and past projects supporting Ukraine.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

