import React from "react";

export default async function GalleryLayout(props: React.PropsWithChildren) {
  return (
    <section>
      <h3>My Art</h3>
      {props.children}
    </section>
  );
};