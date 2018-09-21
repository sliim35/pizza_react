
  export const roleRus = (role) => {
    switch (role) {
      case 'cook':
        return 'Повар';
        break;

      case 'driver':
        return 'Водитель';
        break;

      case 'waiter':
        return 'Официант';
        break;

      default:
        return 'Не указано';
        break;
    }
  }
