// Types
type Props = {
  name: string;
  email: string;
  subject: string;
  message: string;
  className?: string;
};

/**
 * The Contact component
 * @description Will render the Contact
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The Contact component
 */
export const ContactEmail = ({ name, email, subject, message }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">Recebeu uma mensagem do seu website</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Assunto: {subject}</p>
      <p>Mensagem: {message}</p>
    </div>
  );
};
