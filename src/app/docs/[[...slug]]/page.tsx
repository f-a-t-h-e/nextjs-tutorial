interface PageParams {
  params: { slug: string[] };
}
export default function Docs({ params }: PageParams) {
  switch (params.slug?.length) {
    case 1:
      return (
        <div>
          <h1>
            Viewing docs for{" "}
            <a href={`/docs/${params.slug[0]}`} className="underline">
              feature {params.slug[0]}
            </a>
          </h1>
          <ul className="pl-10">
            {Array(10)
              .fill("")
              .map((_, j) => (
                <li
                  key={`${params.slug[0]}${j}`}
                  className="[&:hover>ul]:block relative"
                >
                  <a
                    href={`/docs/${params.slug[0]}/${j}`}
                    className="relative bg-black z-10 w-36 block p-1 hover:bg-white hover:text-black"
                  >
                    Concept {j}
                  </a>
                  <ul className="pl-10 hidden absolute top-full left-0">
                    {Array(10)
                      .fill("")
                      .map((_, k) => (
                        <li key={`${params.slug[0]}${j}${k}`}>
                          <a
                            href={`/docs/${params.slug[0]}/${j}/${k}`}
                            className="bg-black relative w-36 z-20 block whitespace-nowrap p-1 hover:bg-white hover:text-black"
                          >
                            Example {k}
                          </a>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      );
    case 2:
      return (
        <div>
          <h1>
            Viewing docs for{" "}
            <a href={`/docs/${params.slug[0]}`} className="underline">
              feature {params.slug[0]}
            </a>{" "}
            and{" "}
            <a
              href={`/docs/${params.slug[0]}/${params.slug[1]}`}
              className="underline"
            >
              {" "}
              concept {params.slug[1]}
            </a>
          </h1>
          <ul className="pl-10">
            {Array(10)
              .fill("")
              .map((_, k) => (
                <li key={`${params.slug[0]}${params.slug[1]}${k}`}>
                  <a
                    href={`/docs/${params.slug[0]}/${params.slug[1]}/${k}`}
                    className="bg-black relative w-36 z-20 block whitespace-nowrap p-1 hover:bg-white hover:text-black"
                  >
                    Example {k}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      );
    case 3:
      return (
        <div>
          <h1>
            Viewing docs for{" "}
            <a href={`/docs/${params.slug[0]}`} className="underline">
              feature {params.slug[0]}
            </a>
            ,{" "}
            <a
              href={`/docs/${params.slug[0]}/${params.slug[1]}`}
              className="underline"
            >
              {" "}
              concept {params.slug[1]}
            </a>{" "}
            and example {params.slug[2]}
          </h1>
        </div>
      );
    default:
      return (
        <div>
          <h1 className="text-3xl">Docs page</h1>
          <ul className="pl-10">
            {Array(10)
              .fill("")
              .map((_, i) => (
                <li key={i} className="[&:hover>ul]:block relative w-fit">
                  <a
                    href={`/docs/${i}`}
                    className="block w-36 p-1 hover:bg-white hover:text-black"
                  >
                    Feature {i}
                  </a>
                  <ul className="pl-10 hidden absolute top-full left-0">
                    {Array(10)
                      .fill("")
                      .map((_, j) => (
                        <li
                          key={`${i}${j}`}
                          className="[&:hover>ul]:block relative"
                        >
                          <a
                            href={`/docs/${i}/${j}`}
                            className="relative bg-black z-10 w-36 block p-1 hover:bg-white hover:text-black"
                          >
                            Concept {j}
                          </a>
                          <ul className="pl-10 hidden absolute top-full left-0">
                            {Array(10)
                              .fill("")
                              .map((_, k) => (
                                <li key={`${i}${j}${k}`}>
                                  <a
                                    href={`/docs/${i}/${j}/${k}`}
                                    className="bg-black relative w-36 z-20 block whitespace-nowrap p-1 hover:bg-white hover:text-black"
                                  >
                                    Example {k}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      );
      break;
  }
  return (
    <>
      <div>
        <h1 className="text-3xl">Docs page</h1>
      </div>
    </>
  );
}
