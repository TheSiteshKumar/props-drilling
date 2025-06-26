"use client";
import Grandparent from '@/components/Grandparent'
import Parent from '@/components/Parent'
import Child from '@/components/Child'
import Grandchild from '@/components/Grandchild'
import AnotherGrandchild from '@/components/AnotherGrandchild'
import Home from '@/components/Home'

export default function page() {
  return (
    <div>
      <Grandparent />
        <Parent />
        <Child />
        <Grandchild />
        <AnotherGrandchild />
      
      <Home/>
    </div>
  );
}