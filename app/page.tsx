import { Footer } from "@/components/Footer";
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { Marketing } from "@/components/Marketing";
import Navbar from "@/components/Navbar";
import Productivity from "@/components/Productivity";
import Team from "@/components/Team";
import WorkManagementUi from "@/components/WorkManagementUi";
import { ProjectManag } from "@/components/ProjectManag";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <WorkManagementUi/>
     <Productivity/>
     <Marketing/>
     <Team/>
     <Grid/>
     <ProjectManag/>
     <Footer/>
    </div>
  );
}
