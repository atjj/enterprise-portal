export const menuItems = [
    {
      id: "home",
      title:"Главная",
      href: "/"
    },
    {
      id: "contacts",
      title: "Контакты",
      childrens: [
          {
              id: "office",
              title: "Офис",
              href: "/contacts/office-contacts"
          },
          {
              id: "stations",
              title: "АЗС",
              href: "/contacts/station-contacts"
          },
          {
              id: "oildepots",
              title: "Нефтебаза",
              href: "/contacts/oil-depot-contacts"
          },
      ] 
    },
    {
      id: "companyNews",
      title:"Новости компании",
      href: "/companyNews"

    },
    {
      id: "documents",
      title: "Документы",
      href: "/documents"

    },
    {
      id: "newEmployees",
      title: "Новые сотрудники",
      href: "/newEmployees"

    },
    
    {
      id: "stations",
      title: "АЗС",
      href: "/station"
    },
    {
      id: "bitrix",
      title: "Bitrix24",
      href: "https://www.bitrix24.ru"
    }
  ];



  export const columnsStation = [
    {
        key: "station_id",
        label: "Номер АЗС"
    },
    {
        key: "manager_fullname",
        label: "Ф.И.О управляемого"
    },
    {
        key: "mobile_phone",
        label: "Мобильный телефон"
    },
    {
        key: "station_email",
        label: "Почта АЗС"
    }
  ];

  export const columnsOildepot = [
    {
        key: "depot_id",
        label: "Номер Нефтебазы"
    },
    {
        key: "manager_fullname",
        label: "Ф.И.О управляемого"
    },
    {
        key: "mobile_phone",
        label: "Мобильный телефон"
    },
    {
        key: "depot_email",
        label: "Почта Нефтебазы"
    }
  ];


 export const columnsOffice = [
    {
      key: "position",
      label: "Должность",
    },
    {
      key: "fullName",
      label: "Ф.И.О сотрудника",
    },
    {
      key: "inner_phone_number",
      label: "Внутренний телефон",
    },
    {
        key: "mobile_phone",
        label: "Мобильный телефон",
    },
    {
        key: "cabinet",
        label: "Кабинет",
    },
    {
        key: "email",
        label: "Почта",
    },

  ];