import React from 'react';

function CostCalculator({priceOfSingleVMPerHour} : {priceOfSingleVMPerHour : number}) {

    const [vmCount, setVmCount] = React.useState<number>(0);

    const ReadInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const number = parseInt(value) || 0;

        setVmCount(number);
    };


    const hourlyCost = vmCount * priceOfSingleVMPerHour;
    const dailyCost = hourlyCost * 24;
    const monthlyCost = dailyCost * 30;
    const yearlyCost = dailyCost * 365;

    return (
        <div>
            <h1>VM Cost Calculator</h1>
            <label htmlFor="vmNumber">Number of VMs</label>
            <input type="text" id="vmNumber" placeholder="Number of VMs" value={vmCount} onChange={ReadInput} />
                <div>
                    <p>Cost {vmCount}</p>
                    <p>Cost per hour: {hourlyCost}</p>
                    <p>Cost per day: {dailyCost}</p>
                    <p>Cost per month: {monthlyCost}</p>
                    <p>Cost per year: {yearlyCost}</p>
                </div>
        </div>
    );
}

export default CostCalculator;