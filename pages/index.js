import { useTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/UI/Layout';
import PortfolioContext from '../context/context';

export default function Home() {
  const { isNavOpen } = useContext(PortfolioContext);
  console.log(isNavOpen);
  return (
    <Layout>
      <div>
        prva strana Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quibusdam quam sint voluptates suscipit praesentium deserunt voluptatem
        quod ea ab excepturi modi magni est culpa illum reprehenderit corrupti
        amet, repudiandae at alias debitis autem. In at enim animi culpa cumque,
        voluptatem quaerat, reiciendis, dolorem laboriosam placeat accusamus
        perspiciatis asperiores esse consectetur? Doloremque molestiae
        praesentium quibusdam mollitia error deserunt autem cum, distinctio
        sequi iure dignissimos eveniet aspernatur dicta accusamus assumenda.
        Eaque sed voluptatem, in suscipit velit odit ut corrupti repellat
        repudiandae voluptas asperiores dignissimos officia sequi optio. Odit
        facere deserunt excepturi iusto fugiat dolores quidem. Cum inventore
        voluptatibus numquam totam dolor doloremque?prva strana Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quibusdam quam sint
        voluptates suscipit praesentium deserunt voluptatem quod ea ab excepturi
        modi magni est culpa illum reprehenderit corrupti amet, repudiandae at
        alias debitis autem. In at enim animi culpa cumque, voluptatem quaerat,
        reiciendis, dolorem laboriosam placeat accusamus perspiciatis asperiores
        esse consectetur? Doloremque molestiae praesentium quibusdam mollitia
        error deserunt autem cum, distinctio sequi iure dignissimos eveniet
        aspernatur dicta accusamus assumenda. Eaque sed voluptatem, in suscipit
        velit odit ut corrupti repellat repudiandae voluptas asperiores
        dignissimos officia sequi optio. Odit facere deserunt excepturi iusto
        fugiat dolores quidem. Cum inventore voluptatibus numquam totam dolor
        doloremque? footer prva strana Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Quibusdam quam sint voluptates suscipit praesentium
        deserunt voluptatem quod ea ab excepturi modi magni est culpa illum
        reprehenderit corrupti amet, repudiandae at alias debitis autem. In at
        enim animi culpa cumque, voluptatem quaerat, reiciendis, dolorem
        laboriosam placeat accusamus perspiciatis asperiores esse consectetur?
        Doloremque molestiae praesentium quibusdam mollitia error deserunt autem
        cum, distinctio sequi iure dignissimos eveniet aspernatur dicta
        accusamus assumenda. Eaque sed voluptatem, in suscipit velit odit ut
        corrupti repellat repudiandae voluptas asperiores dignissimos officia
        sequi optio. Odit facere deserunt excepturi iusto fugiat dolores quidem.
        Cum inventore voluptatibus numquam totam dolor doloremque? prva strana
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quam
        sint voluptates suscipit praesentium deserunt voluptatem quod ea ab
        excepturi modi magni est culpa illum reprehenderit corrupti amet,
        repudiandae at alias debitis autem. In at enim animi culpa cumque,
        voluptatem quaerat, reiciendis, dolorem laboriosam placeat accusamus
        perspiciatis asperiores esse consectetur? Doloremque molestiae
        praesentium quibusdam mollitia error deserunt autem cum, distinctio
        sequi iure dignissimos eveniet aspernatur dicta accusamus assumenda.
        Eaque sed voluptatem, in suscipit velit odit ut corrupti repellat
        repudiandae voluptas asperiores dignissimos officia sequi optio. Odit
        facere deserunt excepturi iusto fugiat dolores quidem. Cum inventore
        voluptatibus numquam totam dolor doloremque? footerprva strana Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quam sint
        voluptates suscipit praesentium deserunt voluptatem quod ea ab excepturi
        modi magni est culpa illum reprehenderit corrupti amet, repudiandae at
        alias debitis autem. In at enim animi culpa cumque, voluptatem quaerat,
        reiciendis, dolorem laboriosam placeat accusamus perspiciatis asperiores
        esse consectetur? Doloremque molestiae praesentium quibusdam mollitia
        error deserunt autem cum, distinctio sequi iure dignissimos eveniet
        aspernatur dicta accusamus assumenda. Eaque sed voluptatem, in suscipit
        velit odit ut corrupti repellat repudiandae voluptas asperiores
        dignissimos officia sequi optio. Odit facere deserunt excepturi iusto
        fugiat dolores quidem. Cum inventore voluptatibus numquam totam dolor
        doloremque? footer
      </div>
    </Layout>
  );
}
