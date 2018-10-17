import UserInfo from '../UserInfo';
import Employees from '../employee';
import Equipments from '../equipments/Boards';


export default [
  { name: 'home', path: '/', component: UserInfo },
  { name: 'employees', path: '/employees', component: Employees },
  { name: 'equipments', path: '/equipments', component: Equipments },
];
