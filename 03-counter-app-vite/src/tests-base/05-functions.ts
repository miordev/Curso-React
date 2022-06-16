export const getUser = () => ({
  uid: 'ABC123',
  username: 'EL CHOLO',
});

export const getActiveUser = (name: string) => ({
  uid: 'ABC567',
  username: name,
});
