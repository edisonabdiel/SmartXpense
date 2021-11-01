const isIncome = Math.round(Math.random());

export const InfoCard = () => (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%'}}>
        Try saying: <br />
        Add {isIncome ? 'Income ' : 'Expense '}
        for {isIncome ? '€100 ' : '€500 '}
        in Category {isIncome ? 'Salary ' : 'Travel '}
        for {isIncome ? 'Today ' : 'Friday '}
    </div>
);
