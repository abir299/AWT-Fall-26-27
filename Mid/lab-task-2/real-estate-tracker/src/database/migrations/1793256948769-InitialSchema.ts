import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1793256948769 implements MigrationInterface {
    name = 'InitialSchema1793256948769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "location" character varying(200) NOT NULL, "totalFloors" integer NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Planning', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "flats" ("id" SERIAL NOT NULL, "flatNumber" character varying(30) NOT NULL, "floor" integer NOT NULL, "sizeSqft" integer NOT NULL, "customerName" character varying(100) NOT NULL, "projectId" integer NOT NULL, CONSTRAINT "PK_229aa3211ea674ad860c19effe9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "construction_updates" ("id" SERIAL NOT NULL, "stage" character varying(100) NOT NULL, "progressPercentage" integer NOT NULL, "description" text NOT NULL, "updateDate" TIMESTAMP NOT NULL DEFAULT now(), "projectId" integer NOT NULL, CONSTRAINT "PK_d00604045734785cf720081b0fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "flats" ADD CONSTRAINT "FK_0ef51a2106be9c630a5f0ab416f" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "construction_updates" ADD CONSTRAINT "FK_34bdd0cd784110accb622ff5734" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "construction_updates" DROP CONSTRAINT "FK_34bdd0cd784110accb622ff5734"`);
        await queryRunner.query(`ALTER TABLE "flats" DROP CONSTRAINT "FK_0ef51a2106be9c630a5f0ab416f"`);
        await queryRunner.query(`DROP TABLE "construction_updates"`);
        await queryRunner.query(`DROP TABLE "flats"`);
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
