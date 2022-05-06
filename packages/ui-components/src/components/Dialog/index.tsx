import * as Dialog from '@radix-ui/react-dialog';

export const DialogModal = () => {
  // const handleKeyUp = ({ key }: KeyboardEvent) => {
  //   key === 'Escape' && alert('Escape');
  // };

  return (
    <Dialog.Root>
      <Dialog.Trigger>Open Modal 2</Dialog.Trigger>
      {/* <Dialog.Overlay /> */}
      <Dialog.Content>
        Modal Aberto dsdsds
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};
