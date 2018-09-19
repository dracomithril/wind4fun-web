import UserInfo from '../UserInfo';
import Trainers from '../trainers';
import Equipments from '../equipments';


export default [
  { name: 'home', path: '/', component: UserInfo },
  { name: 'trainers', path: '/trainers', component: Trainers },
  { name: 'equipments', path: '/equipments', component: Equipments },
];
