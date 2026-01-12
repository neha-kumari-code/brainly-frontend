import { ShareIcon } from "../icon/ShareIcon";

interface CardProps{
    title:string,
    link:string,
    type:"twitter" | "youtube"
}
export function Card({title,link,type}:CardProps){
    return <div>
        <div className="p-2 shadow-md border-gray-200 max-w-72 bg-white border">
            {/*----upr content--- */}
            <div className="flex justify-between">
                <div className="flex gap-2 items-center text-md font-semibold">
                    <ShareIcon size="md"/>
                    {title}
                </div>
                 <div className="flex items-center gap-2">
                    <a href={link} target="_blank">
                    <ShareIcon size="md"/>
                    </a>
                    <ShareIcon size="md"/>
                </div>
            </div>
            <div className="pt-4">
            {type=='youtube' &&
            <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            }
            {
                type=='twitter' && 
            <blockquote className="twitter-tweet">
                <a href={link.replace("x.com","twitter.com")}>
                </a>
            </blockquote>
            }
            </div>
        </div>
    </div>
}