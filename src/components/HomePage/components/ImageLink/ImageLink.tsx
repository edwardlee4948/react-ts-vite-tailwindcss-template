interface ImageLinkProps {
  url: string;
  source: string;
  alt: string;
}

function ImageLink(props: ImageLinkProps) {
  const { url, source, alt } = props;

  return (
    <>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={source} className="h-32 p-1 hover:drop-shadow-lg hover:animate-ping" alt={alt} />
        </a>
      </div>
    </>
  );
}

export default ImageLink;
