import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { ProjectRoutes } from '../modules/Project/project.route';
import { BlogRoutes } from '../modules/Blog/blog.route';
import { SkillRoutes } from '../modules/Skill/skill.route';
import { ExperienceRoutes } from '../modules/Experience/experience.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/skill',
    route: SkillRoutes,
  },
  {
    path: '/experience',
    route: ExperienceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
