import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { ProductCategory } from "./ProductCategory";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("varchar", { length: 16 })
  color: string;

  @Column()
  productCategoryId: number;

  @Column({ type: "int" })
  parthNumber: number;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.products
  )
  @JoinColumn({ name: "productCategoryId" })
  productCategory: ProductCategory;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
