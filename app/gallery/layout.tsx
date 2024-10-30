import React from "react";

export default async function GalleryLayout(props: React.PropsWithChildren) {
  return (
    <section>
      <h2>My Art</h2>
      {props.children}
    </section>
  );
};