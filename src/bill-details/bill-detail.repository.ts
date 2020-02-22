import { Repository, EntityRepository } from "typeorm";
import { BillDetail } from "./bill-detail.entity";

@EntityRepository(BillDetail)
export class BillDetailRepository  extends Repository<BillDetail>{}
