import {Card} from 'src/app/interfaces/card';

export const CARDS: Card[] = [
  {
    email:'andreazambrano10@gmail.com',
    userType: 'admin',
    name:'Andrea',
    idApp: 'bc000001',

    bramch:"634bbee1d8d2632d682d47ae",
    sex: 'f',
    admin:true,
    branch:'Oficina',
    role:"administrator",
     categories:[      
      'otro'
    ],
    userId:'a9aff449-ec19-4e88-abb9-43d97515f2e1',
    images:[
      'assets/assetsdash/images/profile/captain.png',
      'jamundi'
    ],
    idBranch:'br000001',
    idCard:'ur000001'
  } ,
  {
    bramch:"633bdfaf41e2155dd5d1f6cb",
    email:'junior.marquez.sohigh0@gmail.com',
    userType: 'sucursal',
    name:'Junior',
    idApp: 'bc000001',
    sex: 'm',
    admin:false,
    branch:'colinas del sur',
    role:"sucursal",
    userId:'55ed4514-30d6-487c-9c65-85b7428e412b',
    images:[
      'assets/assetsdash/images/profile/profile.png',
      'jamundi'
    ],
    categories:[
      'compra de insumo',
      'vale de empleado',
      'pago de servicio',
      'otro'
    ],
    idBranch:'br000002',
    idCard:'ur000002'

  },
    {
      bramch:"634b008fd8d2632d681c6c05",
    email:'buckapis@gmail.com',
    userType: 'sucursal',
    name:'Buckapis',
    idApp: 'bc000001',
    admin:false,
    sex: 'm',
    branch:'hidalgo',
    role:"sucursal",
     categories:[
      'compra de insumo',
      'pago tecnico extra',
      'vale de empleado',
      'pago de servicio',
      'otro'
    ],
    userId:'df1f38c8-d3ef-4565-a4f8-4bfb545d699f',
    images:[
      'assets/assetsdash/images/profile/profile.png',
      'jamundi'
    ],
    idBranch:'br000003',
    idCard:'ur000003'

  }
  
  
];