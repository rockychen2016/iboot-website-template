import { FC, HTMLAttributes } from "react";


interface RichWrapProps extends HTMLAttributes<HTMLDivElement> {
    richText: string;
}
const sanitizeHtml = (html: string): string => {
    return html.replace(/<script.*?>.*?<\/script>/gi, '');
};
export default function RichWrap({
    richText,
    ...props
}: Readonly<RichWrapProps>) {

    const cleanHtml = sanitizeHtml(richText);
    return (
        <div {...props} dangerouslySetInnerHTML={{
            __html: cleanHtml
        }}></div>
    );
}

