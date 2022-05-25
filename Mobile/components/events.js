import {EventEmitter} from 'events';

let clientEvents=new EventEmitter(); 
// в потоке clientEvents будут все события, связанные с редактированием, удалением старых и добавлением новых клиентов 
// событие "ESaveClicked" - кликнут сохранить изменения клиента, его сэмитирует MobileClient и примет MobileCompany
// событие "EDeleteClicked" - кликнут удалить клиента, его сэмитирует MobileClient и примет MobileCompany
// событие "ESaveNewClient" - кликнут сохранить нового клиента, его сэмитирует AddClient и примет MobileCompany
// событие "ECancelNewClient" - кликнут отменить сохранение нового клиента, его сэмитирует AddClient и примет MobileCompany

export {clientEvents};


