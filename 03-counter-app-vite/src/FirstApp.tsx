const newMessage = {
  message: 'hello my friend',
  title: 'Miguel',
};

const getDataAsString = (data: any): string => {
  return JSON.stringify(data);
};

export const FirstApp = () => {
  return (
    <>
      <h3>{getDataAsString(newMessage)}</h3>
      <p>It is a subtitle</p>
    </>
  );
};
