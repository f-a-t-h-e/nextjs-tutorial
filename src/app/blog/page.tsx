
export default async function Blog() {
  await new Promise((r=>{
    setTimeout(()=>{
      r(undefined);
    }, 1000)
  }));
  
    return (
      <div>Blog</div>
    )
  }
  