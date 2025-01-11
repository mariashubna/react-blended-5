import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchExangeCurrency } from '../../redux/operations';

const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.currency;
    // console.log('value', value.split(' '));
    const [amount, from, , to] = value.split(' ');
    // console.log({ amount, from, to });
    dispatch(fetchExangeCurrency({ amount, from, to }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        placeholder="15 USD in UAH"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        className={styles.input}
        name="currency"
      />
    </form>
  );
};

export default ExchangeForm;
