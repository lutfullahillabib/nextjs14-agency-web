// 'use client'

import FeauterProject from "@/components/Home/FeauterProject";
import HeroList from "@/components/Home/HeroList";
import WorkList from "@/components/Home/WorkList";
import Subscribe from "@/components/shared/Subscribe";

export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  const JSON = await res.json();
  return {
    title: JSON[0]['title'],
    description: JSON[0]['description'],
    keywords: JSON[0]['keywords'],
    openGraph: {
      images: JSON[0]['image'],
    },
  }
}

export default function Home() {

  return (
    <main className="">

      <div className="bg-[#D7F5DC] py-6">
        <HeroList />
      </div>
      <WorkList />
      <FeauterProject />
      <Subscribe />

    </main>
  )
}

