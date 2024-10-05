
import React from 'react';
import Header from './Header';
import Scrolltop from './ScrollTop';

export default function PageNews ({ title, imageUrl, txt }){
  return (
    <section>
        <div>
            <Scrolltop/>
            <Header/>
        </div>
      <Image src={imageUrl} alt={title} />
      <h1>{title}</h1>
      <Text>{txt}</Text>
    </section>
  );
};

