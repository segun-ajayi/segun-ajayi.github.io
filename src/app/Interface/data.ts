import {Introduction} from './introduction';
import {About} from './about';
import {EducationCollection} from './education-collection';
import {SkillCollection} from './skill-collection';
import {SocialCollection} from './social-collection';
import {PortfolioCollection} from './portfolio-collection';
import {ExperienceCollection} from './experience-collection';

export interface Data {
  introduction: Introduction;
  about: About;
  education: EducationCollection;
  skill: SkillCollection;
  social: SocialCollection;
  portfolio: PortfolioCollection;
  experience: ExperienceCollection;
}
