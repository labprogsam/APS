-- CreateTable
CREATE TABLE "atividade" (
    "id" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "recompensa" INTEGER NOT NULL,
    "frequencia" INTEGER NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atividade_pkey" PRIMARY KEY ("id")
);
