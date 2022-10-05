import {Card} from 'src/app/interfaces/card';

export const CARDS: Card[] = [
  {
    email:'andreazambrano10@gmail.com',
    userType: 'admin',
    name:'Andrea',
    idApp: 'bc000001',
    sex: 'f',
    admin:true,
    branch:'Oficina',
    role:"administrator",
    userId:'a9aff449-ec19-4e88-abb9-43d97515f2e1',
    images:[
      'assets/assetsdash/images/profile/captain.png',
      'jamundi'
    ],
    idBranch:'br000002',
    idCard:'ur000002'
  } ,
  {
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
    idBranch:'br000002',
    idCard:'ur000002'

  },
    {
    email:'buckapis@gmail.com',
    userType: 'sucursal',
    name:'Buckapis',
    idApp: 'bc000001',
    admin:false,
    sex: 'm',
    branch:'hidalgo',
    role:"sucursal",
    userId:'df1f38c8-d3ef-4565-a4f8-4bfb545d699f',
    images:[
      'assets/assetsdash/images/profile/profile.png',
      'jamundi'
    ],
    idBranch:'br000003',
    idCard:'ur000003'

  }
  
  
];