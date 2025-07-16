"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface WalletContextType {
  isConnected: boolean;
  isLoading: boolean;
  walletAddress: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedAddress = localStorage.getItem('walletAddress');
      if (storedAddress) {
        setIsConnected(true);
        setWalletAddress(storedAddress);
      }
    } catch (e) {
      console.error("Could not access localStorage", e);
    } finally {
      setIsLoading(false);
    }
  }, []);


  const connectWallet = () => {
    setIsLoading(true);
    // Simulate async wallet connection
    setTimeout(() => {
      const mockAddress = `0x${[...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
      setWalletAddress(mockAddress);
      setIsConnected(true);
      try {
        localStorage.setItem('walletAddress', mockAddress);
      } catch (e) {
        console.error("Could not access localStorage", e);
      }
      setIsLoading(false);
    }, 1000);
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setIsConnected(false);
    try {
      localStorage.removeItem('walletAddress');
    } catch (e) {
      console.error("Could not access localStorage", e);
    }
  };

  return (
    <WalletContext.Provider value={{ isConnected, isLoading, walletAddress, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
