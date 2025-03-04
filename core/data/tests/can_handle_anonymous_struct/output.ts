/** Enum keeping track of who autofilled a field */
export type AutofilledBy = 
	/** This field was autofilled by us */
	| { type: "Us", content: {
	/** The UUID for the fill */
	uuid: string;
}}
	/** Something else autofilled this field */
	| { type: "SomethingElse", content: {
	/** The UUID for the fill */
	uuid: string;
	/** Some other thing */
	thing: number;
}};

/** This is a comment (yareek sameek wuz here) */
export type EnumWithManyVariants = 
	| { type: "UnitVariant", content: null }
	| { type: "TupleVariantString", content: string }
	| { type: "AnonVariant", content: {
	uuid: string;
}}
	| { type: "TupleVariantInt", content: number }
	| { type: "AnotherUnitVariant", content: null }
	| { type: "AnotherAnonVariant", content: {
	uuid: string;
	thing: number;
}};

