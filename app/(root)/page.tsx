"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export default function SetupPage() {
  return (
   <div>
    <Modal isOpen onClose={()=>{}} title="Test" description="test description">
        children
    </Modal>
   </div>
  );
}
