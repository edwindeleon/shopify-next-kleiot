"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

type ClientDetailModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client: { name: string; email: string; phone?: string };
};

export default function ClientDetailModal({ open, onOpenChange, client }: ClientDetailModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalles del Cliente</DialogTitle>
          <DialogDescription>Información del cliente seleccionada.</DialogDescription>
        </DialogHeader>
        <div>
          <p><strong>Nombre:</strong> {client.name}</p>
          <p><strong>Email:</strong> {client.email}</p>
          {client.phone && <p><strong>Teléfono:</strong> {client.phone}</p>}
        </div>
        <DialogFooter>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Cerrar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
