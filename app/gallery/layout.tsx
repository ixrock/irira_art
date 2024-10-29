import React from "react";

export default async function GalleryLayout(props: React.PropsWithChildren) {
  return (
    <section>
      <h3>My Art</h3>
      {props.children}
      {/*
        [TODO]: add gallery previews (up to 10-20 photos):
        include "oil-painting";
        include "eco-art";
        include "eco-jewellery";
        include "digital-art";
      */}
    </section>
  );
};