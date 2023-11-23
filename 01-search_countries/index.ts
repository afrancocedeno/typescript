/* condorlabs consume rest api with filters */

import axios from "axios";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', [router]);

// const PORT = 3000;
// const HOST = '0.0.0.0';

const url: string = 'https://restcountries.eu/rest/v2/all';

enum Region {
	asia = "Asia"
}

enum SortBy {
	asc = "asc",
	desc = "desc"
}

interface ISearch {
	pageNumber?: number;
	pageSize?: number;
	from?: number;
	to?: number;
	region?: string;
	sort?: Map<string, SortBy>;
}

// do the same params using rest params with spread operator ...

const search = async (params: ISearch): Promise<any[]> => {

	try {
		// spread
		const {
			pageNumber,
			pageSize,
			from,
			to,
			region,
			sort
		} = params;

		if (!pageNumber || !pageSize) {
			return [];
		}

		const res = await axios.get<any[]>(url);
		const db = res.data;
		let countries = db;
		if (from && to) {
			const populations = countries.filter((country) => {
				return from < country.populations && country.populations < to;
			})
			countries = [...populations];
		}
		if (region) {
			const regions = countries.filter((country) => {
				return country.region == region;
			})
			countries = [...regions];
		}

		// sort
		/* 		if (sort) {
					const sortedCountries = countries.sort()
					// if negative number
					// if positive
					// if zero
				} */

		const pageStart = pageNumber * pageSize;
		const result = countries.splice(pageStart, pageSize);
		console.log(result.length, pageStart, pageSize, region);
		return result;

	} catch (error) {
		console.error(error);
		return [];
	}
}

const excecuteTest = async () => {
	const values = await search({ pageSize: 1, pageNumber: 1 });
	console.log(values);
}

excecuteTest();
	