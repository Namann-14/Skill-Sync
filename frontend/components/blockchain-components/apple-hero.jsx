"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full">
      <h1 className="pl-4 text-xl md:text-7xl font-bold text-neutral-200 font-sans">
        Wonder what is <span className="text-primary-500">Blockchain?</span>
      </h1>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Blockchain club is that you understand
                Blockchain club.
              </span>{" "}
              <br />
              Blockchain is a decentralized digital ledger that records
              transactions across multiple computers, ensuring security and
              transparency. It eliminates the need for intermediaries, making
              processes faster and more efficient. Whether its cryptocurrency,
              supply chain management, or voting systems, blockchain is
              revolutionizing industries by fostering trust and accountability.
            </p>

            <Image
              src="/blockchain.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md mt-5"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Why Use Blockchain?
              </span>{" "}
              <br />
              Blockchain offers a decentralized, secure, and transparent way to
              record transactions and manage data. By removing the need for
              centralized authorities, blockchain ensures greater trust and
              accountability. It's an ideal solution for industries like
              finance, supply chain management, healthcare, and voting, where
              transparency and security are paramount. With blockchain, data is
              immutable, reducing the risk of fraud and manipulation, and
              increasing efficiency by automating processes through smart
              contracts. This revolutionary technology is paving the way for
              more secure and trustworthy digital interactions.
            </p>

            <Image
              src="/blockchain.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md mt-5"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                How to Use Blockchain?
              </span>{" "}
              <br />
              To start using blockchain, first, you need to understand its core
              principles: decentralization, immutability, and cryptographic
              security. Here’s a step-by-step process to integrate blockchain
              into your project:
              <ul className="list-inside list-disc mt-4">
                <li>
                  <strong>Step 1:</strong> Choose the Right Blockchain Platform:
                  Depending on your needs, you can choose platforms like
                  Ethereum for public applications or Hyperledger for private
                  blockchain solutions.
                </li>
                <li>
                  <strong>Step 2:</strong> Set Up the Development Environment:
                  Install Node.js, blockchain SDKs (like Web3.js for Ethereum or
                  TelosJS for Telos), and smart contract development tools such
                  as Truffle or Hardhat.
                </li>
                <li>
                  <strong>Step 3:</strong> Create a Wallet: Blockchain
                  transactions require a wallet for storing private keys and
                  interacting with the blockchain. You can use wallets like
                  MetaMask (for Ethereum) or Telos Wallet.
                </li>
                <li>
                  <strong>Step 4:</strong> Develop Smart Contracts: Write and
                  deploy smart contracts on the blockchain to automate processes
                  and transactions. You can use Solidity for Ethereum smart
                  contracts.
                </li>
                <li>
                  <strong>Step 5:</strong> Interact with the Blockchain: Use the
                  blockchain SDK to interact with the deployed contracts, send
                  transactions, and query the blockchain for data.
                </li>
              </ul>
              Blockchain provides a transparent, secure, and efficient way to
              conduct transactions and manage data, making it ideal for
              applications requiring trust and immutability.
            </p>

            <Image
              src="/blockchain.jpg"
              alt="Blockchain illustration"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md mt-5"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContent4 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Why Blockchain is the Future of Technology
              </span>{" "}
              <br />
              Blockchain technology is often described as the future of technology because of its ability to address key challenges in many industries, such as transparency, security, and decentralization. Here's why blockchain is becoming a cornerstone of future technological advancements:
              <ul className="list-inside list-disc mt-4">
                <li>
                  <strong>Decentralization:</strong> Unlike traditional centralized systems, blockchain removes the need for intermediaries, allowing peer-to-peer transactions directly between users. This reduces costs and improves efficiency.
                </li>
                <li>
                  <strong>Security:</strong> Blockchain uses cryptographic techniques to secure data, ensuring that transactions are immutable and tamper-proof. This makes it highly resistant to fraud and hacking attempts.
                </li>
                <li>
                  <strong>Transparency:</strong> Every transaction on the blockchain is recorded on a public ledger, making it transparent and easily auditable. This fosters trust and accountability in industries like finance, supply chain, and healthcare.
                </li>
                <li>
                  <strong>Efficiency:</strong> Blockchain can automate processes with smart contracts, which are self-executing agreements that run without the need for human intervention. This reduces time and errors in business operations.
                </li>
                <li>
                  <strong>Disruption of Industries:</strong> Blockchain is revolutionizing industries like finance, healthcare, supply chain, and even voting systems by enabling secure, efficient, and transparent processes.
                </li>
              </ul>
              As blockchain technology continues to evolve, its potential to transform the way we conduct business, interact online, and handle data is immense. It is poised to reshape industries, build more secure systems, and empower users to take control of their data.
            </p>

            <Image
              src="/blockchain.jpg"
              alt="Blockchain illustration"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md mt-5"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContent5 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Blockchain Revolutionizing Supply Chains
              </span>{" "}
              <br />
              The global supply chain industry has long struggled with challenges related to transparency, efficiency, and trust. Blockchain technology is now offering solutions to these issues, revolutionizing the way supply chains operate. Here's how blockchain is transforming supply chains:
              <ul className="list-inside list-disc mt-4">
                <li>
                  <strong>Transparency:</strong> Blockchain creates a transparent and immutable record of every transaction or movement of goods, ensuring all participants in the supply chain can track products in real-time. This visibility increases accountability and reduces fraud.
                </li>
                <li>
                  <strong>Traceability:</strong> Blockchain allows for the precise tracking of products from the point of origin to the final consumer. This ensures that companies can verify product authenticity, ensuring quality control and reducing the risks associated with counterfeit goods.
                </li>
                <li>
                  <strong>Efficiency:</strong> With blockchain, supply chain processes are automated using smart contracts, reducing the time needed for manual checks and paperwork. It streamlines transactions and accelerates payment cycles by eliminating intermediaries.
                </li>
                <li>
                  <strong>Cost Reduction:</strong> Blockchain minimizes administrative and transaction costs by reducing the need for middlemen, such as brokers or auditors, which can significantly reduce the overhead in supply chain operations.
                </li>
                <li>
                  <strong>Security:</strong> The cryptographic nature of blockchain ensures the integrity and security of the data throughout the supply chain. Once recorded, data cannot be altered, preventing tampering or data breaches.
                </li>
              </ul>
              As blockchain adoption in supply chains increases, businesses will benefit from more secure, transparent, and efficient operations, leading to improved trust between stakeholders and reduced operational costs.
            </p>

            <Image
              src="/blockchain-supply-chain.jpg"
              alt="Blockchain in supply chain"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md mt-5"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContent6 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Smart Contracts: Automating Transactions with Blockchain
              </span>{" "}
              <br />
              Smart contracts are self-executing contracts with the terms of the agreement directly written into code. Powered by blockchain technology, they offer a more secure, transparent, and automated way to execute transactions and enforce agreements. Here's how smart contracts work and why they are revolutionizing industries:
              <ul className="list-inside list-disc mt-4">
                <li>
                  <strong>Automation:</strong> Smart contracts automatically execute transactions when predefined conditions are met. For example, once payment is received, a smart contract will automatically release a product to the buyer. This eliminates the need for intermediaries and reduces the chances of human error.
                </li>
                <li>
                  <strong>Security:</strong> Smart contracts are stored on the blockchain, ensuring that once they are deployed, they cannot be altered. The blockchain's cryptographic security makes it highly resistant to hacking or fraud, ensuring that the contract terms are always followed.
                </li>
                <li>
                  <strong>Transparency:</strong> Because smart contracts are based on blockchain technology, the terms and conditions are visible to all participants in the network. This transparency builds trust among parties, as they can verify contract execution in real-time.
                </li>
                <li>
                  <strong>Cost Efficiency:</strong> By eliminating intermediaries such as lawyers, notaries, or banks, smart contracts drastically reduce transaction costs. They streamline processes, cutting down on paperwork and administrative overhead.
                </li>
                <li>
                  <strong>Real-World Applications:</strong> Smart contracts have a wide range of applications across industries, including finance, real estate, supply chain management, and legal agreements. They can be used to facilitate everything from financial transactions to voting systems and insurance claims.
                </li>
              </ul>
              With their ability to automate processes, reduce costs, and increase trust, smart contracts are transforming the way businesses operate and are expected to become a key feature of the blockchain ecosystem.
            </p>

            <Image
              src="/smart-contracts.jpg"
              alt="Smart contracts illustration"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md mt-5"
            />
          </div>
        );
      })}
    </>
  );
};


const data = [
  {
    category: "Introduction to Blockchain",
    title: "What is Blockchain?",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent1 />,
  },
  {
    category: "Why to use Blockchain?",
    title: "Why should you use Blockchain?",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent2 />,
  },
  {
    category: "Process to use it",
    title: "How to use Blockchain?",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent3 />,
  },

  {
    category: "Blockchain Basics",
    title: "Why Blockchain is the Future of Technology",
    src: "https://images.unsplash.com/photo-1591691411707-e9081493226b?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent4 />,
  },
  {
    category: "Blockchain in Industry",
    title: "Blockchain Revolutionizing Supply Chains",
    src: "https://images.unsplash.com/photo-1591635314137-30d8bfc7b02d?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent5 />,
  },
  {
    category: "Smart Contracts",
    title: "Smart Contracts: Automating Transactions with Blockchain",
    src: "https://images.unsplash.com/photo-1599282440900-b0461267e5f3?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent6 />,
  },
];
