import UserInfo from '../UserInfo';
import EmployeesTable from '../employees/Employees';
import Boards from '../equipments/boards/Boards';
import Clients from '../clients';
import Calendar from '../calendar';

export default [
  { name: 'home', path: '/', component: UserInfo },
  { name: 'employees', path: '/employees', component: EmployeesTable },
  { name: 'equipments', path: '/equipments', component: Boards },
  { name: 'clients', path: '/clients', component: Clients },
  { name: 'calendar', path: '/calendar', component: Calendar },
];
