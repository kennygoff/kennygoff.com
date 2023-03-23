type Props = {
  title: string;
  content: string;
};

export const PostCallout = ({ title, content }: Props) => (
  <div className="bg-slate-700 p-4 not-prose rounded border-l-4 border-l-sky-500">
    <h2 className="font-bold text-base mb-2">{title}</h2>
    <p className="text-base">{content}</p>
  </div>
);
