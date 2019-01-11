import UserInfo from '../UserInfo';
import EmployeesTable from '../employees/EmployeesTable';
import Boards from '../equipments/boards/Boards';


export default [
  { name: 'home', path: '/', component: UserInfo },
  { name: 'employees', path: '/employees', component: EmployeesTable },
  { name: 'equipments', path: '/equipments', component: Boards },
];
