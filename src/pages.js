import { About } from "./About/about";
import { Overview } from "./Overview/overview";
import { Projects } from "./Projects/projects";
import { Skills } from "./Skills/skills";

export const pages = [
    {
        id: 0,
        name: 'Overview',
        component: <Overview/>
    },
    {
        id: 1,
        name: 'About Me',
        component: <About/>
    },
    {
        id: 2,
        name: 'Skills',
        component: <Skills/>
    },
    {
        id: 3,
        name: 'Projects',
        component: <Projects/>
    }
];
