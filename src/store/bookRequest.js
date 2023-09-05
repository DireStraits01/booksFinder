import { makeAutoObservable } from 'mobx';

class bookRequest {
  constructor() {
    makeAutoObservable(this);
  }
}
const [bookRequest, setBookRequest] = useState('');
