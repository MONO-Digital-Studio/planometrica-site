
import React from "react";

type SectionTitleProps = {
  title: string;
  description: React.ReactNode;
};

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="max-w-3xl mx-auto text-gray-600">{description}</div>
    </div>
  );
}
