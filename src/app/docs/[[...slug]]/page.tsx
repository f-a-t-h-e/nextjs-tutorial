import Link from "next/link";

interface Props {
  params: { slug: string[] };
}
export default function Docs({ params }: Props) {
  switch (params.slug?.length) {
    case 1:
      return (
        <div>
          <h1>
            Viewing docs for{" "}
            <Link href={`/docs/${params.slug[0]}`} className="underline">
              feature {params.slug[0]}
            </Link>
          </h1>
          <ul className="pl-10">
            {Array(10)
              .fill("")
              .map((_, j) => (
                <li
                  key={`${params.slug[0]}${j}`}
                  className="[&:hover>ul]:block relative"
                >
                  <Link
                    href={`/docs/${params.slug[0]}/${j}`}
                    className="relative bg-black z-10 w-36 block p-1 hover:bg-white hover:text-black"
                  >
                    Concept {j}
                  </Link>
                  <ul className="pl-10 hidden absolute top-full left-0">
                    {Array(10)
                      .fill("")
                      .map((_, k) => (
                        <li key={`${params.slug[0]}${j}${k}`}>
                          <Link
                            href={`/docs/${params.slug[0]}/${j}/${k}`}
                            className="bg-black relative w-36 z-20 block whitespace-nowrap p-1 hover:bg-white hover:text-black"
                          >
                            Example {k}
                          </Link>
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
            <Link href={`/docs/${params.slug[0]}`} className="underline">
              feature {params.slug[0]}
            </Link>{" "}
            and{" "}
            <Link
              href={`/docs/${params.slug[0]}/${params.slug[1]}`}
              className="underline"
            >
              {" "}
              concept {params.slug[1]}
            </Link>
          </h1>
          <ul className="pl-10">
            {Array(10)
              .fill("")
              .map((_, k) => (
                <li key={`${params.slug[0]}${params.slug[1]}${k}`}>
                  <Link
                    href={`/docs/${params.slug[0]}/${params.slug[1]}/${k}`}
                    className="bg-black relative w-36 z-20 block whitespace-nowrap p-1 hover:bg-white hover:text-black"
                  >
                    Example {k}
                  </Link>
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
            <Link href={`/docs/${params.slug[0]}`} className="underline">
              feature {params.slug[0]}
            </Link>
            ,{" "}
            <Link
              href={`/docs/${params.slug[0]}/${params.slug[1]}`}
              className="underline"
            >
              {" "}
              concept {params.slug[1]}
            </Link>{" "}
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
                  <Link
                    href={`/docs/${i}`}
                    className="block w-36 p-1 hover:bg-white hover:text-black"
                  >
                    Feature {i}
                  </Link>
                  <ul className="pl-10 hidden absolute top-full left-0">
                    {Array(10)
                      .fill("")
                      .map((_, j) => (
                        <li
                          key={`${i}${j}`}
                          className="[&:hover>ul]:block relative"
                        >
                          <Link
                            href={`/docs/${i}/${j}`}
                            className="relative bg-black z-10 w-36 block p-1 hover:bg-white hover:text-black"
                          >
                            Concept {j}
                          </Link>
                          <ul className="pl-10 hidden absolute top-full left-0">
                            {Array(10)
                              .fill("")
                              .map((_, k) => (
                                <li key={`${i}${j}${k}`}>
                                  <Link
                                    href={`/docs/${i}/${j}/${k}`}
                                    className="bg-black relative w-36 z-20 block whitespace-nowrap p-1 hover:bg-white hover:text-black"
                                  >
                                    Example {k}
                                  </Link>
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
