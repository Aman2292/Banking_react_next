import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Aman", lastName:"Chaurasiya" , email:"chaurasiyaaman110@gmail.com"}
  return (
    <section className="home">
        <div className="home-content">
        <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction effeciently"
            />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={6664.45}
          />
        </header>
        RECENT TRANSCATIONS
        </div>
        <RightSidebar 
        user ={loggedIn}
        transactions={[]}
        banks={[{currentBalance:5555.20},{currentBalance:9855.20}]}

        />
    </section>
  ) 
}

export default Home

