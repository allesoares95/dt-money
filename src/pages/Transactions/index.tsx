import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Sumarry } from "../../components/Sumarry";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createAt: string;
}

export function Transactions() {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json();

    setTransaction(data);
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  return (
    <div>
      <Header />
      <Sumarry />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transactions => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>
                  <td>
                    <PriceHighLight variant={transactions.type}>
                      {transactions.price}
                    </PriceHighLight>
                  </td>
                  <td>{transactions.category}</td>
                  <td>{transactions.createAt}</td>
                </tr>
              )
            })}

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}