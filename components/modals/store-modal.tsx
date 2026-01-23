"use client";
 import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
const StoreModal: React.FC = () => {
    const storeModal = useStoreModal();
  // Your component logic here
  return (
    <div>
    <Modal
    title="Create Store"
    description="Add a new store to manage products and categories"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
        Futue Create store form
    </Modal>
   Future Store Modal
    </div>
  );
};

export default StoreModal;